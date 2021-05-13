import Highlight, { HighlightStat } from '../components/common/Highlights';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { useCoursesCountQuery, useTeachersCountQuery } from '../generated/graphql';
import { withApollo } from '../utils/apolloHelpers/withApollo';

const Index = () => {
  const { data: teacherData } = useTeachersCountQuery();
  const { data: courseDate } = useCoursesCountQuery();

  const highlights: HighlightStat[] = [
    {
      label: 'Teachers',
      value: teacherData?.teachersCount ?? 0
    },
    {
      label: 'Courses',
      value: courseDate?.coursesCount ?? 0
    }
  ]
  return (
  <Container pageTitle='Home'>
    <DarkModeSwitch />
    <Highlight highlights={highlights} />
  </Container>
)}

export default withApollo({ ssr: true })(Index)
