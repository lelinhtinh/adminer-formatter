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
  $formatBtn.textContent =
    document.documentElement.lang === 'vi' ? 'Định dạng' : 'Format';
  $formatBtn.style = 'margin-left: 40px;';

  $formatBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const $pre =
      $queryEditor.previousElementSibling &&
      $queryEditor.previousElementSibling.tagName === 'PRE'
        ? $queryEditor.previousElementSibling
        : $.querySelector('#form pre');
    if (!$pre) return;

    let dbDriver =
      $.querySelector('#breadcrumb > a:first-of-type')
        ?.textContent.trim()
        .toLowerCase() ?? 'sql';
    if (!sqlFormatter.supportedDialects.includes(dbDriver)) {
      dbDriver = 'sql';
    }
    $formatBtn.setAttribute('data-driver', dbDriver);

    const jushClass = Array.from($pre.classList).filter((e) =>
      e.includes('jush-')
    );
    const dbType = jushClass?.length ? jushClass[0].split('-').pop() : 'sql';
    $formatBtn.setAttribute('data-type', dbType);

    const query = $queryEditor.value;
    const formatted = sqlFormatter.format(query, {
      language: dbDriver,
      keywordCase: 'upper',
      dataTypeCase: 'upper',
      functionCase: 'upper',
      identifierCase: 'lower',
    });
    const highlighted = jush.highlight(dbType, formatted);

    $queryEditor.value = formatted;
    $pre.innerHTML = highlighted;
  });

  $buttonWrapper.appendChild($formatBtn);
})(document);
