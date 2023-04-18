db.produtos.deleteMany({ curtidas: { $lt: 50 } });
db.produtos.find({}, {name: 1, _id: 0})