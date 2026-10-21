using AnalisisCochesMAUI.Models.Entities;
using AnalisisCochesMAUI.ViewModels;

namespace AnalisisCochesMAUI
{
    public partial class MainPage : ContentPage
    {
        private readonly CochesVM _viewModel;

        public MainPage(CochesVM viewModel)
        {
            InitializeComponent();
            _viewModel = viewModel;
            BindingContext = viewModel;
        }

        private async void OnMarcaSeleccionada(object? sender, SelectionChangedEventArgs e)
        {
            if (e.CurrentSelection.FirstOrDefault() is not MarcaCoche marca)
            {
                return;
            }

            _viewModel.MarcaSeleccionada = marca;
            await Shell.Current.GoToAsync(nameof(Views.ModelosPage));

            if (sender is CollectionView collectionView)
            {
                collectionView.SelectedItem = null;
            }
        }
    }
}
