# source-academy-deployment

A repository to occassionaly deploy live versions of different refs of [Source Academy](https://github.com/source-academy/) for preview/development purposes.

## Deployment

* Frontend:

  * Deploys a specified ref from the forked repo: [frontend](https://github.com/RichDom2185/source-academy-frontend)
  * Simply run the workflow specified in `deploy-ref.yml`

* Backend:

  * Deploys the main branch from the forked repo: [backend](https://github.com/RichDom2185/source-academy-backend)
  * Copy the `backend-config.exs.example` file to `backend-config.exs` and modify the fields as required
  * Use the Makefile to set up and run the (dev, not prod) deployment.
