using Microsoft.Extensions.Logging;
using AnalisisCochesMAUI.ViewModels;
using AnalisisCochesMAUI.Views;

namespace AnalisisCochesMAUI
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                    fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                });

#if DEBUG
    		builder.Logging.AddDebug();
#endif
            builder.Services.AddSingleton<CochesVM>();
            builder.Services.AddSingleton<MainPage>();
            builder.Services.AddTransient<ModelosPage>();
            builder.Services.AddTransient<DetalleModeloPage>();
            builder.Services.AddSingleton<AppShell>();

            return builder.Build();
        }
    }
}
