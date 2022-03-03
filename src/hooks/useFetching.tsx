import React from 'react'

export default function useFetching(callback: () => void ) {
      const [isLoading, setIsLoading] = React.useState<boolean>(false)
      const [errorValue, setErrorValue] = React.useState<null | string>(null)

     const fetching: any = async () => {
         try {
            setIsLoading(true)
            await callback()
         } catch (error) {
            setErrorValue((error as Error).toString())
         }
         finally{
            setIsLoading(false)
         }
     }

     return [fetching, isLoading, errorValue]
}
