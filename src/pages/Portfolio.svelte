<script>
  import PortfolioSection from "../components/PortfolioSection.svelte";

  const projects = [
    {
      name: "Natours",
      description:
        "A full stack app for booking tours. Made with Hasura, AWS Amplify and Reactjs.",
    },
    {
      name: "Chattly",
      description:
        "A real-time chat application. Made with Nodejs, Graphql, Postgres and Svelte.",
    },
  ];

  const experience = [
    {
      title: "Backend Developer",
      organisation: "Lumifile",
      period: "May 2015 - current",
    },
    {
      title: "Intern Software Developer",
      organisation: "Javaplus Innovations",
      period: "August 2014 - March 2015",
    },
  ];

  const skills = [
    "Svelte",
    "HTML5",
    "Tailwind CSS",
    "CSS3",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React.js",
    "GraphQL",
    "PostgreSQL",
    "JavaScript",
  ];
</script>

<main class="flex flex-col items-center">
  <section
    class="flex flex-col w-full py-9 items-center bg-gray-800 text-center"
  >
    <h1 class="text-3xl capitalize">sarah dayan</h1>
    <img
      src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
      alt="profile"
      class="h-36 w-36 mt-4 rounded-full object-cover shadow-inner bg-gray-500"
    />
    <h2 class="mt-4 text-xl text-center capitalize">UX engineer</h2>
    <div class="text-sm text-gray-400 capitalize font-medium">
      staton, oakmont
    </div>
    <button
      class="mt-6 px-10 py-2 rounded-full bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-sm uppercase font-bold"
    >
      Message
    </button>
    <div class="flex mt-8 space-x-3 text-gray-400">
      <a class="focus:outline-white" href="/">
        <svg viewBox="0 0 32 32" class="w-5 h-5 fill-current">
          <title>github</title>
          <path
            d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
          />
        </svg>
      </a>
      <a class="focus:outline-white" href="/">
        <svg viewBox="0 0 32 32" class="w-5 h-5 fill-current">
          <title>link</title>
          <path
            d="M13.757 19.868c-0.416 0-0.832-0.159-1.149-0.476-2.973-2.973-2.973-7.81 0-10.783l6-6c1.44-1.44 3.355-2.233 5.392-2.233s3.951 0.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743c-0.635 0.635-1.663 0.635-2.298 0s-0.635-1.663 0-2.298l2.743-2.743c1.706-1.706 1.706-4.481 0-6.187-0.826-0.826-1.925-1.281-3.094-1.281s-2.267 0.455-3.094 1.281l-6 6c-1.706 1.706-1.706 4.481 0 6.187 0.635 0.635 0.635 1.663 0 2.298-0.317 0.317-0.733 0.476-1.149 0.476z"
          />
          <path
            d="M8 31.625c-2.037 0-3.952-0.793-5.392-2.233-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743c0.635-0.635 1.664-0.635 2.298 0s0.635 1.663 0 2.298l-2.743 2.743c-1.706 1.706-1.706 4.481 0 6.187 0.826 0.826 1.925 1.281 3.094 1.281s2.267-0.455 3.094-1.281l6-6c1.706-1.706 1.706-4.481 0-6.187-0.635-0.635-0.635-1.663 0-2.298s1.663-0.635 2.298 0c2.973 2.973 2.973 7.81 0 10.783l-6 6c-1.44 1.44-3.355 2.233-5.392 2.233z"
          />
        </svg>
      </a>
      <a class="focus:outline-white" href="/">
        <svg viewBox="0 0 32 32" class="w-5 h-5 fill-current">
          <title>twitter</title>
          <path
            d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
          />
        </svg>
      </a>
    </div>
  </section>
  <div class="w-full">
    <PortfolioSection name="Projects" actionName="Project">
      <ul>
        {#each projects as { name, description }}
          <li class="flex justify-between items-center mt-5">
            <div>
              <h4 class="text-lg">{name}</h4>
              <p class="text-gray-400">
                {description}
              </p>
              <div class="flex items-center mt-1 text-purple-400">
                <a href="/" class="flex items-center focus:outline-white">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <title>code</title>
                    <path
                      d="M16.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM7.293 5.293l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"
                    />
                  </svg>
                  <span class="ml-1 text-sm capitalize font-medium">Code</span>
                </a>
                <a href="/" class="flex items-center ml-3 focus:outline-white">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <title>live</title>
                    <path
                      d="M17 13v6c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM10.707 14.707l9.293-9.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-9.293 9.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
                    />
                  </svg>
                  <span class="ml-1 text-sm capitalize font-medium">Live</span>
                </a>
              </div>
            </div>
            <button class="ml-6 p-1 rounded-lg bg-gray-700 text-gray-200">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <title>edit</title>
                <path
                  d="M12 21h9c0.552 0 1-0.448 1-1s-0.448-1-1-1h-9c-0.552 0-1 0.448-1 1s0.448 1 1 1zM15.793 2.793l-12.5 12.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l12.5-12.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM17.207 4.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-12.304 12.304-2.115 0.529 0.529-2.115z"
                />
              </svg>
            </button>
          </li>
        {/each}
      </ul>
    </PortfolioSection>
    <PortfolioSection name="Experience" actionName="Experience">
      <ul>
        {#each experience as { title, organisation, period }}
          <li class="flex justify-between items-center mt-5">
            <div>
              <h4 class="text-lg">{title}</h4>
              <p class="text-gray-400">
                {organisation}
              </p>
              <div class="mt-1 text-sm capitalize font-medium text-purple-400">
                {period}
              </div>
            </div>
            <button class="ml-4 p-1 rounded-lg bg-gray-700 text-gray-200">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <title>edit</title>
                <path
                  d="M12 21h9c0.552 0 1-0.448 1-1s-0.448-1-1-1h-9c-0.552 0-1 0.448-1 1s0.448 1 1 1zM15.793 2.793l-12.5 12.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l12.5-12.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM17.207 4.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-12.304 12.304-2.115 0.529 0.529-2.115z"
                />
              </svg>
            </button>
          </li>
        {/each}
      </ul>
    </PortfolioSection>
    <PortfolioSection name="Skills" actionName="Skill">
      <ul class="flex flex-wrap mt-5">
        {#each skills as skill}
          <li
            class="mr-2 mb-2 px-4 py-2 rounded-full border border-purple-300 bg-gray-700 text-purple-300 text-sm font-medium"
          >
            {skill}
          </li>
        {/each}
      </ul>
    </PortfolioSection>
  </div>
</main>
