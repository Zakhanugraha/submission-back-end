const { handlerMenyimpanBuku, handlerMenampilkanBuku, handlerMenampilkanBukuMelaluiId, handlerMengubahDataBuku, handlerMenghapusBuku } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: handlerMenyimpanBuku,
    },
    {
        method: 'GET',
        path: '/books',
        handler: handlerMenampilkanBuku,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: handlerMenampilkanBukuMelaluiId,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: handlerMengubahDataBuku,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: handlerMenghapusBuku,
    }
]

module.exports = routes;