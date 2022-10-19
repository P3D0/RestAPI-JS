'use strict';

module.exports = function(app){
    let jsonn = require('./controller');

    app.route('/')
        .get(jsonn.index);
    app.route('/tampil')
        .get(jsonn.tampilsemuamahasiswa);
    app.route('/tampil/:id')
        .get(jsonn.tampilberdasarkanid);
    app.route('/tambah')
        .post(jsonn.tambahMahasiswa);
    app.route('/ubah')
        .put(jsonn.ubahMahasiswa);
    app.route('/hapus')
        .delete(jsonn.hapusMahasiswa);
}