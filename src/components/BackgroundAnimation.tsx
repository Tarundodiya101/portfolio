const BackgroundAnimation = () => (
  <div className="site-background" aria-hidden="true">
    <div className="site-background__aura site-background__aura--left" />
    <div className="site-background__aura site-background__aura--right" />
    <div className="site-background__perspective">
      <div className="site-background__grid site-background__grid--fine" />
      <div className="site-background__grid site-background__grid--major" />
    </div>
    <div className="site-background__beam site-background__beam--one" />
    <div className="site-background__beam site-background__beam--two" />
    <div className="site-background__nodes">
      {Array.from({ length: 16 }, (_, index) => (
        <span key={index} style={{ '--node-index': index } as React.CSSProperties} />
      ))}
    </div>
    <div className="site-background__scan" />
    <div className="site-background__vignette" />
  </div>
);

export default BackgroundAnimation;