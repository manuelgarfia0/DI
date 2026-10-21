using AnalisisCochesMAUI.Models.Entities;

namespace AnalisisCochesMAUI.Models.Data;

public static class MarcaCocheRepository
{
    private static readonly MarcaCoche[] Marcas =
    [
        new(1, "Toyota"),
        new(2, "Ford"),
        new(3, "SEAT"),
        new(4, "BMW")
    ];

    public static MarcaCoche[] GetListadoMarcasCoches() => [.. Marcas];
}
