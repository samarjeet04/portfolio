import {Typography} from "@mui/material";

export default function MouseHint({coordinates}) {
  return (
    <div style={{position: 'absolute', top: coordinates.y, left: coordinates.x, zIndex: 99999}}>
      <Typography style={{zIndex: 99999}}>
        Drag to move
      </Typography>
    </div>
  )
}