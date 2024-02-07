import { Signal, useSignal, useSignalEffect } from "@preact/signals";

type ColorScheme = 'light' | 'dark' | 'system';

type UseColorScheme = { scheme: Signal<ColorScheme> };

const useColorScheme = (): UseColorScheme => {
  const scheme = useSignal<ColorScheme>(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  useSignalEffect(() => {
    const modeMe = (e: MediaQueryListEvent): void => {
      scheme.value = e.matches ? 'dark' : 'light';
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', modeMe);
    return window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', modeMe);
  });

  return { scheme };
};

export default useColorScheme;
