var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array){
    array.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');
    array.splice(4,1,'Pria','SMA Internasional Metro');
    console.log(array);
    //Pisah Tanggal dan gabungkan dengan -
    var tanggal = (array[3].split('/'));
    var bulan = String(tanggal.slice(1,2));
    var newTanggal = tanggal.join('-');
    
    //Mengubah Bulan
    switch(bulan){
        case '01': console.log('Januari'); break;
        case '02': console.log('Februari'); break;
        case '03': console.log('Maret'); break;
        case '04': console.log('April'); break;
        case '05': console.log('Mei'); break;
        case '06': console.log('Juni'); break;
        case '07': console.log('Juli'); break;
        case '08': console.log('Agustus'); break;
        case '09': console.log('September'); break;
        case '10': console.log('Oktober'); break;
        case '11': console.log('November'); break;
        case '12': console.log('Desember'); break;
        default : console.log('Wrong input!'); break;
    }
    //Sortir Descending Tanggal
    tanggal.sort(function(value1,value2){return value2-value1})
    console.log(tanggal);
    //Print tanggal format baru
    console.log(newTanggal);
    //Slice nama menjadi 15 karakter
    var nama = array[1].slice(0,15);
    console.log(nama);
    
    return;

}

dataHandling2(input);