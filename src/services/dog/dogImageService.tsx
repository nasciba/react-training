import axios from 'axios';

export async function getDogBreedImage(dogBreedName: string): Promise<string> {
    return axios.get(`https://dog.ceo/api/breed/${dogBreedName}/images/random`)
    .then(response => {
      console.log(response)
      if (response.data.status !== 'success')
        throw new Error('Não foi possível recuperar a imagem dessa raça.');
      return response.data.message;
    });
}
