


$('#example').DataTable( {
    pagingType: 'full_numbers',
    dom: 'Bfrtip',
    buttons: [
        'colvis',
        'excel',
        'print'
    ]
} );


function eliminar(elemento){
    const id = elemento.value;
    console.log(id)
    fetch(`http://localhost:4000/eliminar/${id}`,{method:"delete"}).then( location.reload())

}