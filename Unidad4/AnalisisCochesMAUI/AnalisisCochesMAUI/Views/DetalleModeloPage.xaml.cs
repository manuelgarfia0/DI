using AnalisisCochesMAUI.ViewModels;

namespace AnalisisCochesMAUI.Views;

public partial class DetalleModeloPage : ContentPage
{
    public DetalleModeloPage(CochesVM viewModel)
    {
        InitializeComponent();
        BindingContext = viewModel;
    }
}
