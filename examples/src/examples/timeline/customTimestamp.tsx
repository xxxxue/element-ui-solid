import { Card, Timeline, TimelineItem } from "element-ui-solid";

export default () => {
  return (
    <>
      <Timeline>
        <TimelineItem timestamp="2018/4/12" placement="top">
          <Card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/12 20:46</p>
          </Card>
        </TimelineItem>
        <TimelineItem timestamp="2018/4/3" placement="top">
          <Card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/3 20:46</p>
          </Card>
        </TimelineItem>
        <TimelineItem timestamp="2018/4/2" placement="top">
          <Card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/2 20:46</p>
          </Card>
        </TimelineItem>
      </Timeline>
    </>
  );
};
