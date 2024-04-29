const insertPPEQuery = (body) =>
    `INSERT INTO ppe(fullname, shortname, sertificate, lifespan, to_be_returned, is_kit, size_type, unit_type)
    values ('${body.fullname}', '${body.shortname}', ${body.sertificateId}, '${body.lifeSpan}' , ${Boolean(body.toBeReturned)},
    ${Boolean(body.isKit)}, ${Number(body.sizeType)}, '${body.unitType}');`

const getPPEQuery = (id) => `select ppe.id, fullname, shortname, title as sertificate, lifespan, to_be_returned, is_kit, size_type, unit_type from ppe inner join sertificates on ppe.sertificate = sertificates.id where ppe.id = ${id} limit 1`;

const getPPEsQuery = () => 'select * from ppe';

const deletePPEQuery = (id) => `delete from ppe where id = ${id}`;

module.exports = { insertPPEQuery, getPPEQuery, deletePPEQuery, getPPEsQuery };