(($) => {
  const $h1 = $.querySelector('#h1');
  if (
    !$h1 ||
    $h1.textContent !== 'Adminer' ||
    $h1.tagName !== 'A' ||
    $h1.href !== 'https://www.adminer.org/'
  )
    return;

  const $queryEditor = $.querySelector('textarea.sqlarea[name="query"]');
  if (!$queryEditor) return;

  const $tokenInput = $.querySelector('input[name="token"]');
  if (!$tokenInput) return;

  const $buttonWrapper = $.querySelector('#form p:last-of-type');
  if (!$buttonWrapper) return;

  const $formatBtn = $.createElement('button');
  $formatBtn.textContent = 'Format';
  $formatBtn.style = 'float: right;';

  $formatBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const $pre = $.querySelector('#form pre');
    if (!$pre) return;

    const jushClass = Array.from($pre.classList).filter((e) =>
      e.includes('jush-')
    );
    const dbType = jushClass?.length ? jushClass[0].split('-').pop() : 'sql';

    const query = $queryEditor.value;
    const formatted = sqlFormatter.format(query);
    const highlighted = jush.highlight(dbType, formatted);

    $queryEditor.value = formatted;
    $pre.innerHTML = highlighted;
  });

  $buttonWrapper.appendChild($formatBtn);
})(document);
