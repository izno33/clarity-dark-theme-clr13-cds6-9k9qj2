export class LogReward {
  RewardName!: string;
  Count!: number;

  private headers = ['RewardName', 'Count'];
  items: LogReward[] = [];
  itemSize = 2;

  add(data: any[]) {
    const l = data.length;
    if (l === this.itemSize) {
      console.log('Reward', data);
      const summary = Object.fromEntries(
        this.headers.map((_, i) => [this.headers[i], data[i]])
      );
      // const summary = Object.assign(...this.headers.map((k, i) => ({[k]: data[i]})));
      this.items.push(summary as LogReward);
    } else {
      console.error("Mauvaise taille d'élément", data);
    }
  }
}
