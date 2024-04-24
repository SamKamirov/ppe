const insertPPEQuery = (body) =>
    `INSERT INTO ppe_list(fullname, shortname, sertificateid, lifespan,  tobereturned, iskit, sizetype, unittype) values
('${body.fullname}', '${body.shortname}', ${body.sertificateId}, '${body.lifeSpan}' , ${Boolean(body.toBeReturned)}, ${Boolean(body.isKit)}, ${Number(body.sizeType)}, '${body.unitType}');`

const getPPEQuery = (id) => `select * from ppe_list where id = ${id} limit 1`;

const deletePPEQuery = (id) => `delete from ppe_list where id = ${id}`;

const insertUsingAct = (body) => `INSERT INTO ppe_using(act_title, act_title_full) values('${body.actTitle}', '${body.actTitleFull}')`

module.exports = { insertPPEQuery, getPPEQuery, deletePPEQuery, insertUsingAct };