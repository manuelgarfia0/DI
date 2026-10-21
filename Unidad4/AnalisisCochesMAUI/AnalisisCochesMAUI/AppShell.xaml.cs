using AnalisisCochesMAUI.Views;

namespace AnalisisCochesMAUI
{
    public partial class AppShell : Shell
    {
        public AppShell(MainPage mainPage)
        {
            InitializeComponent();

            var content = new ShellContent
            {
                Title = "Marcas",
                Content = mainPage,
                Route = nameof(MainPage)
            };
            var section = new ShellSection { Title = "Catálogo" };
            section.Items.Add(content);

            var item = new FlyoutItem { Title = "Coches" };
            item.Items.Add(section);
            Items.Add(item);

            Routing.RegisterRoute(nameof(ModelosPage), typeof(ModelosPage));
            Routing.RegisterRoute(nameof(DetalleModeloPage), typeof(DetalleModeloPage));
        }
    }
}
