import CustomModal from '@/components/modal/modal'
import {
  decrement,
  increment,
  loadScenes,
  changeSceneTitle
} from '@/store/action'
import isEmpty from 'lodash/isEmpty'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ListScene = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {
        props.scenes.map((sc, index) => (
          <a
            variant="primary"
            className="list-group-item"
            key={index}
            scene-id={sc.id}
            onClick={props.showPopup}
          >
            {sc.title}
          </a>
        ))}
    </ul>
  )
}

const CounterSection = (props) => {
  return (
    <>
      <span className="text-success text-center w-100 fs-1 fw-bold">
        {props.counter?.value || 0}
      </span>
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          aria-label="Increment value"
          onClick={props.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          aria-label="Decrement value"
          onClick={props.handleDecrement}
        >
          Decrement
        </button>
      </div>
    </>
  )
}

export default function Counter() {
  const states = useSelector((state) => state.root)
  const [isShow, setShow] = useState(false)
  const [scene, setScene] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadScenes())
  }, [dispatch])

  const showPopup = useCallback(
    (e) => {
      const currentSceneId = e.target.getAttribute('scene-id')
      const currentScene = states?.scenes.find(
        (e) => e.id === currentSceneId
      )
      setScene(currentScene)
      setShow(true)
    },
    [states?.scenes]
  )

  const closePopup = useCallback((e) => {
    setScene({})
    setShow(false)
  }, [])

  const updateTitle = useCallback((e) => {
    dispatch(changeSceneTitle(e.id, e.title))
    setShow(false)
  }, [dispatch])

  const handleIncrement = useCallback(() => {
    dispatch(increment())
  }, [dispatch])

  const handleDecrement = useCallback(() => {
    dispatch(decrement())
  }, [dispatch])

  return (
    <div className="card">
      { states?.counter &&
        <CounterSection
          counter={states.counter}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      }

      { states?.scenes &&
        <ListScene
          scenes={states.scenes}
          showPopup={showPopup}
        />
      }

      { !isEmpty(scene) &&
        <CustomModal
          isShow={isShow}
          scene={scene}
          handleClose={closePopup}
          saveTitle={updateTitle}
        />
      }
    </div>
  )
}
