/**
 * Hook that copy a text in the clipboard.
 */
const useClipboard = (): { copyToClipboard: (text: string) => void } => {
  const copyToClipboard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return { copyToClipboard };
};

export default useClipboard;
