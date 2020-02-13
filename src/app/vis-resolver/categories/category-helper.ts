import { CategoryEntrySelection, CategoryGroup } from '../model';

export class CategoryHelper {

    public findCategoryEntrySelection(groups: CategoryGroup[], group: any, entry: any): CategoryEntrySelection {
        const g = groups.find(e => e instanceof group) as CategoryGroup;
        return g.categoryEntriesSelection.find(e => e.entry instanceof entry);
    }

}
