const insertPPEQuery = (body) =>
    `INSERT INTO ppe(fullname, shortname, lifespan, sertificateid, period, to_be_returned, is_kit, size_type, unit_type) values ('${body.fullname}', '${body.shortname}', ${body.lifeSpan}, ${Number(body.sertificateID)}, ${Number(body.period)} , ${Boolean(body.toBeReturned)}, ${Boolean(Number(body.isKit))}, ${Number(body.sizeType)}, '${body.unitType}');`

const getPPEQuery = (id) => `select ppe.id, fullname, shortname, lifespan, sertificates.title as sertificate, frequency, to_be_returned, is_kit, size_types.title as size_type, unit_type from ppe inner join sertificates on ppe.sertificateid = sertificates.id inner join periods on ppe.period = periods.id inner join size_types on ppe.size_type = size_types.id 

where ppe.id = ${id} limit 1`;

const getPPEsQuery = () => 'select * from ppe';

const deletePPEQuery = (id) => `delete from ppe where id = ${id}`;

module.exports = { insertPPEQuery, getPPEQuery, deletePPEQuery, getPPEsQuery };