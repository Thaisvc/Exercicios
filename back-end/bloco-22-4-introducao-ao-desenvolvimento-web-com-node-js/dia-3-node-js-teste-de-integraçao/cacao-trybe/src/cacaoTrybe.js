const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacaoTrybeFile.json';

const readCacaoTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (content) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    return null;
  }
}

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const createChocolate = async (name, brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const newChocolate = { id: cacaoTrybe.nextChocolateId, name, brandId};
  cacaoTrybe.chocolates.push(newChocolate);

  cacaoTrybe.nextChocolateId += 1;
  await writeCacaoTrybeFile(cacaoTrybe);
  
  return newChocolate;
};

const deleteChocolate = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolateExists = cacaoTrybe.chocolates.some(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateExists) {
    cacaoTrybe.chocolates = cacaoTrybe.chocolates.filter(
      (chocolate) => chocolate.id !== id,
    );

    await writeCacaoTrybeFile(cacaoTrybe);
    return true;
  }

  return false;
};

// EXERCICIO



module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  createChocolate,
  deleteChocolate
};