import express, { Request, Response, Router } from 'express';

import Plants from './Plants'

const app = express();
const PlantsModule = new Plants();
app.use(express.json());
const RouterPlants = Router();
const PORT = process.env.PORT || 3000;

RouterPlants.get('/', async (req: Request, res: Response) => {
    const plants = await PlantsModule.getPlants();
    res.status(200).json(plants);
});

RouterPlants.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const getPlants = await PlantsModule.getPlantById(id);
    if (!getPlants) return res.status(404).json({ message: 'Plant not Found!' });
    res.status(200).json(getPlants);
});

RouterPlants.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletPlant = await PlantsModule.removePlantById(id);
    if (!deletPlant) return res.status(404).json({ message: 'Plant not Found!' });
    res.status(204).end();
});

RouterPlants.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const update = await PlantsModule.editPlant(id, req.body);
    res.status(200).json(update);
});

RouterPlants.post('/', async (req: Request, res: Response) => {
    const newPlant = await PlantsModule.savePlant(req.body);
    res.status(201).json(newPlant);
});

app.use('/plants', RouterPlants);

app.get('/sunny/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const plant = await PlantsModule.getPlantsThatNeedsSunWithId(id);
    res.status(200).json(plant);
  });
  
  app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));