import { Skeleton, SkeletonItem } from "element-ui-solid";

export default () => {
  return (
    <>
      <Skeleton
        style={{ width: "240px" }}
        template={
          <>
            <SkeletonItem variant="image" style={{ width: "240px", height: "240px" }} />
            <div style={{ padding: "14px" }}>
              <SkeletonItem variant="p" style={{ width: "50%" }} />
              <div
                style={{
                  display: "flex",
                  "align-items": "center",
                  "justify-items": "space-between",
                }}
              >
                <SkeletonItem variant="text" style={{ "margin-right": "16px" }} />
                <SkeletonItem variant="text" style={{ width: "30%" }} />
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
