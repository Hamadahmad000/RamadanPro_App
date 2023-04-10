import {Add_Surah_TO_fav} from '../ActionTypes';

export const AddSruahFav = data => ({
  type: Add_Surah_TO_fav,
  payload: data,
});

export const RemoveSurahFav = Index => ({
    type: RemoveSurahFav,
    payload: Index,
  });
