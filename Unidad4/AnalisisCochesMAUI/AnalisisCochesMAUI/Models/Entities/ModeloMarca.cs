namespace AnalisisCochesMAUI.Models.Entities;

public sealed record ModeloMarca(
    int Id,
    string Nombre,
    float Longitud,
    float Anchura,
    string Foto,
    int IdMarca);
