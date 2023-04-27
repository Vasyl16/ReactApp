export const changeCSSVariables = (theme) => {
  const root = document.querySelector(':root');
  // root.style.setProperty(
  //   '--theme-default-header',
  //   `var(--theme-${theme}-header)`
  // );
  const cssVariables = ['header', 'bgimage'];

  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
