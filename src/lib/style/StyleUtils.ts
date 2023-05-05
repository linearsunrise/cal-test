
export default class StyleUtils {
  static getStyleString(styles: (string | undefined | null | boolean)[]): string {
    return styles.filter(Boolean).join(" ");
  }
}