using AnalisisCochesMAUI.Models.Entities;

namespace AnalisisCochesMAUI.Models.Data;

public static class ModeloMarcaRepository
{
    private static readonly ModeloMarca[] Modelos =
    [
        new(1, "Corolla", 4.63f, 1.78f, string.Empty, 1),
        new(2, "Yaris", 3.94f, 1.75f, string.Empty, 1),
        new(3, "Focus", 4.38f, 1.83f, string.Empty, 2),
        new(4, "Puma", 4.19f, 1.81f, string.Empty, 2),
        new(5, "León", 4.37f, 1.80f, string.Empty, 3),
        new(6, "Ibiza", 4.06f, 1.78f, string.Empty, 3),
        new(7, "Serie 1", 4.36f, 1.80f, string.Empty, 4),
        new(8, "X1", 4.50f, 1.85f, string.Empty, 4)
    ];

    public static ModeloMarca[] GetListadoModeloPorMarca(int idMarca) =>
        Modelos.Where(modelo => modelo.IdMarca == idMarca).ToArray();

    public static ModeloMarca? GetModelo(int idModelo) =>
        Modelos.FirstOrDefault(modelo => modelo.Id == idModelo);
}
