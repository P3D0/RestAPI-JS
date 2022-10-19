'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan", res);
};

//menampilak semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (err, row, fields) {
        if (err) {
            console.log(err);
        } else {
            response.ok(row, res)
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data mahasiswa
exports.tambahMahasiswa = function (req, res) {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)', [nim, nama, jurusan], function (err, rows, fields) {
        if (err) {
            console.log(err);
        } else {
            response.ok("Berhasil Menambahkan data !", res);
        }
    });
};

//menghubah data berdasarkan id
exports.ubahMahasiswa = function (req, res) {
    let id = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            } else {
                response.ok("Berhasil Mengubah Data !", res)
            }
        });
}

//menghapus data berdasarkan id
exports.hapusMahasiswa = function (req, res) {
    let id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            } else {
                response.ok("Berhasil Menghapus Data !", res)
            }
        });
}