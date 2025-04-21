import apiClient from "../api/planets"

export const PlanetService = {
  getAllPlanets: async (): Promise<IPlanet[]> => {
    const response = await apiClient.get('/bodies/');
    const allBodies: IPlanet[] = response.data.bodies;
    
    return allBodies.filter(body => body.isPlanet); 
  },
};