import { Box } from 'theme-ui'

import { Layout, Row, Column, Link, Heading } from '@carbonplan/components'

const FAQ = () => {
  return (
    <Layout
      links={'homepage'}
      title={'Terms – CarbonPlan'}
      description={'Overview of terms related to code, data, and reuse.'}
    >
      <Heading>Terms</Heading>
      <Row>
        <Column start={[2, 2, 3, 3]} width={[5, 5, 6, 6]}>
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'body',
              lineHeight: 'body',
              letterSpacing: 'body',
            }}
          >
            All code powering this website is{' '}
            <Link href='https://choosealicense.com/licenses/mit/'>MIT</Link>{' '}
            licensed and available on{' '}
            <Link href='https://github.com/carbonplan'>GitHub</Link>.
          </Box>
          <Box as='p' variant='styles.p'>
            Consistent with our charitable mission to build open tools and
            resources for the evaluation and deployment of climate solutions, we
            aim to release models and datasets under maximally permissive
            licenses.
          </Box>
          <Box as='p' variant='styles.p'>
            We do request that you please provide attribution if reusing any of
            our digital content (graphics, logo, data, articles, etc.).
          </Box>
          <Box as='p' variant='styles.p'>
            Some of the data made available on parts of this website or through
            our APIs is sourced from content made available under a{' '}
            <Link href='https://choosealicense.com/licenses/cc-by-4.0/'>
              CC-BY
            </Link>{' '}
            license. We include attribution for this content, and we please
            request that you also maintain that attribution if using this data.
          </Box>
          <Box as='p' variant='styles.p'>
            We may change some of these terms in the future. Please check back
            here for updates. If you have any questions, please contact us at{' '}
            <Link href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>
            .
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

export default FAQ
