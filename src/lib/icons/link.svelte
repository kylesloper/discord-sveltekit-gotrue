<script>
  export let width = null
  export let height = '1rem'
  export let fill = 'white'
</script>

<svg
  {height}
  {width}
  viewBox="0 0 62 62"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 22H40V62H0V22Z" fill="#FF5B4F" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M35 27H5V57H35V27ZM0 22V62H40V22H0Z"
    {fill}
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M52.9645 5.5H40V0.5H61.5V22H56.5V9.03552L37.7089 27.8265L34.1734 24.291L52.9645 5.5Z"
    {fill}
  />
</svg>
