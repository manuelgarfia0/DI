using System.ComponentModel;
using System.Runtime.CompilerServices;
using AnalisisCochesMAUI.Models.Data;
using AnalisisCochesMAUI.Models.Entities;

namespace AnalisisCochesMAUI.ViewModels;

public sealed class CochesVM : INotifyPropertyChanged
{
    private MarcaCoche? _marcaSeleccionada;
    private ModeloMarca? _modeloSeleccionado;
    private ModeloMarca[] _listadoModelos = [];

    public event PropertyChangedEventHandler? PropertyChanged;

    public MarcaCoche[] ListadoMarcas { get; }

    public MarcaCoche? MarcaSeleccionada
    {
        get => _marcaSeleccionada;
        set
        {
            if (!SetProperty(ref _marcaSeleccionada, value))
            {
                return;
            }

            ListadoModelos = value is null
                ? []
                : ModeloMarcaRepository.GetListadoModeloPorMarca(value.Id);
            ModeloSeleccionado = null;
        }
    }

    public ModeloMarca[] ListadoModelos
    {
        get => _listadoModelos;
        private set => SetProperty(ref _listadoModelos, value);
    }

    public ModeloMarca? ModeloSeleccionado
    {
        get => _modeloSeleccionado;
        set => SetProperty(ref _modeloSeleccionado, value);
    }

    public CochesVM()
    {
        ListadoMarcas = MarcaCocheRepository.GetListadoMarcasCoches();
    }

    private bool SetProperty<T>(ref T backingField, T value, [CallerMemberName] string? propertyName = null)
    {
        if (EqualityComparer<T>.Default.Equals(backingField, value))
        {
            return false;
        }

        backingField = value;
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        return true;
    }
}
