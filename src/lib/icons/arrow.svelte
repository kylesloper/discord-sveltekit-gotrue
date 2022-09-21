<script>
  export let width = null
  export let height = '1rem'
  export let fill = 'white'
  export let className
</script>

<svg
  {height}
  {width}
  class={className}
  viewBox="0 0 42 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="titanArrow"
>
  <path d="M39.5987 13.7218H0.822266V16.2782H39.5987V13.7218Z" {fill} />
  <path
    d="M26.4521 -1.39986e-05L24.598 1.85413L39.0222 16.2784L40.8764 14.4242L26.4521 -1.39986e-05Z"
    {fill}
  />
  <path
    d="M39.5959 13.1479L24.598 28.1459L26.4521 30L41.45 15.0021L39.5959 13.1479Z"
    {fill}
  />
</svg>
