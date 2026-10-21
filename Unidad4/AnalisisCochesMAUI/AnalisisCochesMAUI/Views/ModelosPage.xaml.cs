using AnalisisCochesMAUI.Models.Entities;
using AnalisisCochesMAUI.ViewModels;

namespace AnalisisCochesMAUI.Views;

public partial class ModelosPage : ContentPage
{
    private readonly CochesVM _viewModel;

    public ModelosPage(CochesVM viewModel)
    {
        InitializeComponent();
        _viewModel = viewModel;
        BindingContext = viewModel;
    }

    private async void OnModeloSeleccionado(object? sender, SelectionChangedEventArgs e)
    {
        if (e.CurrentSelection.FirstOrDefault() is not ModeloMarca modelo)
        {
            return;
        }

        _viewModel.ModeloSeleccionado = modelo;
        await Shell.Current.GoToAsync(nameof(DetalleModeloPage));

        if (sender is CollectionView collectionView)
        {
            collectionView.SelectedItem = null;
        }
    }
}
