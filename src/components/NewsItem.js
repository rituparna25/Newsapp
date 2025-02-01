import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    
    return (
        <div className="my-3">
            <div className="card" style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Source Badge */}
                <div style={{
                    position: 'absolute',
                    right: '0',
                    top: '10px',
                    zIndex: '1'
                }}>
                    <span className="badge rounded-pill bg-danger" 
                          style={{ marginRight: '10px' }}>
                        {source}
                    </span>
                </div>
                
                {/* Image */}
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} 
                     className="card-img-top" 
                     alt="..."
                     style={{
                         height: '200px',
                         objectFit: 'cover',
                         borderTopLeftRadius: '8px',
                         borderTopRightRadius: '8px'
                     }} />
                
                {/* Card Content */}
                <div className="card-body" style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                }}>
                    <h5 className="card-title" style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        marginBottom: '10px'
                    }}>{title}</h5>
                    
                    <p className="card-text" style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        flexGrow: 1
                    }}>{description}</p>
                    
                    <div style={{marginTop: 'auto'}}>
                        <p className="card-text">
                            <small className="text-muted" style={{fontSize: '0.8rem'}}>
                                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
                            </small>
                        </p>
                        
                        <a rel="noreferrer" 
                           href={newsUrl} 
                           target="_blank" 
                           className="btn btn-sm btn-dark"
                           style={{
                               backgroundColor: '#343a40',
                               color: 'white',
                               padding: '5px 15px',
                               borderRadius: '4px',
                               textDecoration: 'none',
                               fontSize: '0.9rem',
                               display: 'inline-block',
                               marginTop: '10px'
                           }}>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem