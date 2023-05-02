
export default class StyleUtils {
  static getStyleString(styles: (string | undefined | null)[]): string {
    return styles.filter(Boolean).join(" ");
  }
}