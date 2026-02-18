export type GroupResult<T> = Record<
  string,
  {
    title: string;
    items: T[];
  }
>;

export function groupByFieldImmutableFast<
  T,
  K extends keyof T,
  KeyItem,
  Group
>(params: {
  items?: T[];
  field: K;
  keys: KeyItem[];

  getGroupKeyFromItem: (item: T) => string;
  getGroupKeyFromKey: (key: KeyItem) => string;

  createMutableGroup: (key: KeyItem) => Group;
  addItemMutable: (group: Group, item: T) => void;

  freeze?: boolean; // опциональный deep freeze
}): Record<string, Group> {
  const {
    items,
    keys,
    getGroupKeyFromItem,
    getGroupKeyFromKey,
    createMutableGroup,
    addItemMutable,
    freeze = false,
  } = params;

  const result: Record<string, Group> = {};

  if (!items?.length) return result;

  // 1️⃣ создаём группы (одна аллокация на группу)
  for (let i = 0; i < keys.length; i++) {
    const keyObj = keys[i];
    const key = getGroupKeyFromKey(keyObj);
    result[key] = createMutableGroup(keyObj);
  }

  // 2️⃣ раскладываем items (без копий)
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const key = getGroupKeyFromItem(item);
    const group = result[key];

    if (group) {
      addItemMutable(group, item);
    }
  }

  // 3️⃣ optional freeze (immutability boundary)
  if (freeze) {
    Object.freeze(result);
    for (const key in result) {
      Object.freeze(result[key]);
    }
  }

  return result;
}


// export function groupByFieldWithTitles<
//   T,
//   K extends keyof T,
//   KeyItem extends Record<string, string>,
//   Field extends keyof KeyItem
// >(
//   items: T[] | undefined,
//   field: K,
//   keys: KeyItem[],
//   keyField: Field,
//   titleField: Field
// ): GroupResult<T> {
//   if (!Array.isArray(items)) return {};

//   const initialValue = keys.reduce((acc, keyObj) => {
//     const key = keyObj[keyField];
//     const title = keyObj[titleField];

//     acc[key] = {
//       title,
//       items: [],
//     };

//     return acc;
//   }, {} as GroupResult<T>);

//   return items.reduce((acc, item) => {
//     const fieldValue = item[field];

//     if (typeof fieldValue === "string" && acc[fieldValue]) {
//       acc[fieldValue].items.push(item);
//     }

//     return acc;
//   }, initialValue);
// }


// export function groupByClient<T, Key extends keyof T>(items: T[] | undefined, key: Key, fields: Key[]) {

// }

