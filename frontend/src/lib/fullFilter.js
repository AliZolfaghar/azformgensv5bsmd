export const fullFilter = (items, searchText) => {
    if (!searchText) {
        return items; // if not searchText return all data 
    }

    return items.filter( (item) => {
        for (var key in item) { // loop in key values in each item 
            if (item[key].toString().toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
        }
        return false;
    });
};