import apiClient from "../api/planets"

export const PlanetsService = {
  getAllPlanets: async (): Promise<IPlanet[]> => {
    const response = await apiClient.get('/bodies/?filter[]=isPlanet,eq,true');
    const AllPlanets: IPlanet[] = response.data.bodies;

    return AllPlanets;
  },
};

 export const getPlanetId = async (planetId?: string): Promise<IPlanet> => {
  const response = await apiClient.get(`/bodies/${planetId}`);
  const planet: IPlanet = response.data;

  return planet;
};