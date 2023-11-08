export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'userName',
      headerName: 'User',
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.userName}
            
          </div>
        )
      },
     
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 230 },
    { field: 'status', headerName: 'Status',  width: 230 ,
    renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}

            </div>
        )
    },
   },
    
  ];

export  const userRows = [
    {
      id: 1,
      status: 'active',
      email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.A7FSd43P2BCDRh7SQ8tiQQHaHa?pid=ImgDet&rs=1",
       userName: 'Jon',
      age: 35
    },
    {
      id: 2,
      status: 'passive',
       email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.ztgPgVsciBwffeWWZofdCgHaLH?pid=ImgDet&rs=1",
       userName: 'Cersei',
      age: 42
    },
    {
      id: 3,
      status: 'pending',
      email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.MyyWssBxmHV51VQCa0MYpgHaMC?pid=ImgDet&w=2619&h=4256&rs=1",
      userName: 'Jaime',
      age: 45
    },
    {
      id: 4,
      status: 'pending',
      email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.A7FSd43P2BCDRh7SQ8tiQQHaHa?pid=ImgDet&rs=1",
       userName: 'Arya',
      age: 16
    },
    {
      id: 5,
      status: 'active',
      email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.ztgPgVsciBwffeWWZofdCgHaLH?pid=ImgDet&rs=1", 
      userName: 'Daenerys',
      age: null
    },
    {
      id: 6,
      status: 'pending',
      email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.A7FSd43P2BCDRh7SQ8tiQQHaHa?pid=ImgDet&rs=1",
      userName: null,
      age: 150
    },
    {
      id: 7,
      status: 'passive',
      email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.ztgPgVsciBwffeWWZofdCgHaLH?pid=ImgDet&rs=1", 
      userName: 'Ferrara',
      age: 44
    },
    {
      id: 8,
      status: 'active',
      email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.A7FSd43P2BCDRh7SQ8tiQQHaHa?pid=ImgDet&rs=1",
       userName: 'Rossini',
      age: 36
    },
    {
      id: 9,
      status: 'pending',
      email: 'example@gmail.com',
      img: "https://th.bing.com/th/id/OIP.A7FSd43P2BCDRh7SQ8tiQQHaHa?pid=ImgDet&rs=1", userName: 'Harvey',
      age: 65
    },
  ];