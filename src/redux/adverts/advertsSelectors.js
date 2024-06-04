import { createSelector } from '@reduxjs/toolkit';
import {
  selectFiltersEquipment,
  selectFiltersLocation,
  selectFiltersType,
} from '../filters/filtersSelectors.js';

export const selectAdverts = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;

// export const selectOneAdvert = createSelector(
//   [selectAdverts, (_, id) => id],
//   (adverts, id) => adverts.find(advert => advert._id === id)
// );

export const selectFilteredAdverts = createSelector(
  [
    selectAdverts,
    selectFiltersLocation,
    selectFiltersEquipment,
    selectFiltersType,
  ],
  (adverts, location, equipment, type) => {
    return adverts.filter(advert => {
      const selectedLocation =
        location === '' ||
        advert.location.toLowerCase().includes(location.toLowerCase());
      const selectedType = type === '' || advert.form === type;
      const selectedEquipment = equipment.every(
        equipment => advert.details[equipment] !== 0
      );

      return selectedLocation && selectedType && selectedEquipment;
    });
  }
);
