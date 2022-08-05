<script>
  import Icon from '@iconify/svelte';

  const color = '#b0bee7';
  const width = 70;
  const height = 70;
</script>

<div class="card-content">
  <div class="card-subtitle">Connect with me</div>
  <p class="card-subtext">
    If you want to know more about me or my work, or if you would just like to
    say hello, send me a message. I'd love to hear from you.
  </p>
  <div class="card-contact-wrapper">
    <div class="card-contact">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      125 Academy Ave, Sanford, FL, 32771
    </div>
    <div class="card-contact">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>(407) 617-8687
    </div>
    <div class="card-contact">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
      ilyakatrych@gmail.com
    </div>
    <div class="card-social">
      <a href="https://github.com/IlyaTaidi" target="_blank">
        <Icon icon="arcticons:github" {color} {width} {height} />
      </a>
      <a
        href="https://www.linkedin.com/in/ilya-gnezdilov-9aaa611a2?trk=people-guest_people_search-card"
        target="_blank">
        <Icon icon="arcticons:linkedin" {color} {width} {height} />
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  @import '../variables.scss';
  .card-content {
    height: 100%;
    width: 100%;
    line-height: 4vh;
  }
  .card-subtitle {
    margin-bottom: 15px;
    color: $blue;
    font-family: $title;
    font-weight: $bolder;
    font-size: $medium;
  }
  .card-subtext {
    color: $lightBlue;
    font-family: $content;
    font-weight: $thiner;
    font-size: $small;
  }
  .card-contact-wrapper {
    margin-top: 20px;
  }
  .card-contact {
    font-family: $content;
    font-weight: $thiner;
    font-size: $small;
    color: $lightBlue;
    display: flex;
    align-items: center;
    line-height: 6vh;
    cursor: pointer;
    svg {
      height: auto;
      position: relative;
      flex-shrink: 0;
      width: 20px;
      min-height: 34px;
      margin-right: 12px;
      transition: 0.3s;
      padding-right: 12px;
      border-right: 1px solid #dfe2ec;
    }
  }
  .card-social {
    display: flex;
    padding-top: 1em;
    gap: 0.4vw;
  }
</style>
