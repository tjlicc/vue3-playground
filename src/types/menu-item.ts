export default interface MenuItem {
  key: string;
  label: string;
  children: Array<MenuItem>;
  isLeaf: boolean;
  compName?: string;
}