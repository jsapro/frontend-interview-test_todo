/* VENDOR */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/* APPLICATION */
import { initialState } from '../data/constants';
import { RootState } from './store';
import type { CategoriesStateWithCategory } from './types';

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		tasksAdded: (
			state: CategoriesStateWithCategory[],
			action: PayloadAction<Omit<CategoriesStateWithCategory, 'id'>>
		) => {
			state.push({
				id: uuidv4(),
				...action.payload,
			});
		},
		tasksUpdated: (
			state: CategoriesStateWithCategory[],
			action: PayloadAction<CategoriesStateWithCategory>
		) => {
			const { id, name, description, category } = action.payload,
				existingTask = state.find((task) => task.id === id);

			if (existingTask) {
				existingTask.name = name;
				existingTask.description = description;
				existingTask.category = category;
			}
		},
		tasksRemoved: (
			state: CategoriesStateWithCategory[],
			action: PayloadAction<string>
		) => {
			const id = action.payload;
			const categoryIndexToRemove = state.findIndex((category) => category.id === id);

			if (categoryIndexToRemove !== -1) {
				state.splice(categoryIndexToRemove, 1);
			}
		},
		tasksClearedCategories: (state, action) => {
			state.forEach((task) => {
				if (task.category === action.payload) task.category = '';
			});
		},
	},
});

export const { tasksAdded, tasksUpdated, tasksRemoved, tasksClearedCategories } =
	tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
