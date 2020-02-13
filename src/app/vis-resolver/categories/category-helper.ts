import { CategoryEntry, CategoryGroup } from '../model';

export class CategoryHelper {

    public findCategoryEntrySelection(groups: CategoryGroup[], group: any, entry: any): CategoryEntry {
        const g = groups.find(e => e instanceof group) as CategoryGroup;
        return g.categoryEntries.find(e => e instanceof entry);
    }

}
